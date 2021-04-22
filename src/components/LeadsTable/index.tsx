import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

import { parseISO, format } from 'date-fns';
import { OpenLeadModal } from "../Modal/OpenLeadModal";

interface leads {
    id: string;
    name: string;
    phone: string;
    email: string;
    interest: string;
    description: string;
    created_at: string;
}

interface IRequest {
    routes: string;
}

export function LeadsTable({routes}: IRequest) {
    const [reports, setReports] = useState<leads[]>();
    const [isOpenLeadModal, setIsOpenLeadModal] = useState(false);
    const [leadModal, setLeadModal] = useState<leads>({} as leads);

    useEffect(() => {
        api.get<leads[]>(routes).then((response) => {
            const leadsFormatted = response.data.map(lead => {
                return {
                    ...lead,
                    created_at: format(parseISO(lead.created_at), 'dd MM yyyy'),
                }
            })

            setReports(leadsFormatted);
        });
    },[routes]);

    function handleOpenLeadModal(lead: leads) {
        if (routes !== "/leads") {
            setLeadModal(lead);
            setIsOpenLeadModal(true);
        }
    }

    function handleCloseOpenLeadModal() {
        setIsOpenLeadModal(false);
    }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Descrição</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {reports && reports.map(lead => (
                        <tr key={ lead.id } onClick={ () => handleOpenLeadModal(lead)}>
                            <td>{ lead.name }</td>
                            <td>{ lead.phone }</td>
                            <td>{ lead.email }</td>
                            <td>{ lead.description && lead.description.substring(0,30) }...</td>
                            <td>{ lead.created_at }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <OpenLeadModal
            isOpen={isOpenLeadModal}
            onRequestClose={handleCloseOpenLeadModal}
            lead={leadModal}/>
        </Container>
    );
}
