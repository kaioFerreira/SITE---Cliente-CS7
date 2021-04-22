import { format, parseISO } from "date-fns";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";
import { api } from "../../services/api";
import { OpenReportModal } from "../Modal/OpenReportModal";
import {
    Container,
    Content
 } from "./styles";

interface leads {
    id: string;
    name: string;
    phone: string;
    email: string;
    interest: string;
    created_at: string;
}

interface ILead {
    id: string;
    name: string;
    phone: string;
    email: string;
    description: string;
    interest: string;
    created_at: string;
}

interface IReports {
    lead: ILead;
    id: string;
    description: string;
    created_at: string;
}

interface IReportModel {
    id: string;
    lead_id: string;
    name: string;
    phone: string;
    email: string;
    interest: string;
    description: string;
    created_at: string;
}

export function ReportsTable() {
    const [reports, setReports] = useState<IReports[]>();
    const [reportsFilterTable, setReportsFilterTable] = useState<IReports[]>();
    const [isOpenReportModal, setIsOpenReportModal] = useState(false);
    const [reportModal, setReportModal] = useState<IReportModel>({} as IReportModel);
    const inputRef = useRef<HTMLInputElement>(null);
    const { signOut } = useAuth();
    const { addToast } = useToast();

    useEffect(() => {
        api.get<IReports[]>('/reports').then((response) => {
            const reportsFormatted = response.data.map(report => {
                return {
                    ...report,
                    created_at: format(parseISO(report.created_at), 'dd MM yyyy'),
                }
            })

            setReports(reportsFormatted);
            setReportsFilterTable(reportsFormatted);
        }).catch((error) => {
            if (error.response.status === 401) {
                signOut();

                addToast({
                    type: 'error',
                    title: 'Sessão expirada!',
                    description: 'Faça login e continue utilizando o sistema normalmente.',
                });
            }
        });
    },[signOut, addToast]);

    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setReportsFilterTable(reports?.filter( (value) => {
            return value.lead.name.toLowerCase().includes(`${e.currentTarget.value.toLowerCase()}`);
        }))
    }, [reports]);

    function handleOpenReportModal(report: IReports) {

        const renponse = {
            id: report.id,
            lead_id: report.lead.id,
            name: report.lead.name,
            phone: report.lead.phone,
            email: report.lead.email,
            interest: report.lead.interest,
            description: report.description,
            lead_description: report.lead.description,
            created_at: report.lead.created_at
        }

        setReportModal(renponse);
        setIsOpenReportModal(true);
    }

    function handleCloseReportModal() {
        setIsOpenReportModal(false);
    }

    return (
        <>
            <Content>
                <div>
                    <input type="text" ref={inputRef} onKeyUp={handleKeyUp} placeholder="Digite o nome..."/>
                    <FiSearch size={20} color={'var(--text-body)'}/>
                </div>
            </Content>
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
                        { reportsFilterTable && reportsFilterTable.map(report => (
                            <tr key={ report.id } onClick={ () => handleOpenReportModal(report)}>
                                <td>{ report.lead.name }</td>
                                <td className="reports-table-column-phone">{ report.lead.phone }</td>
                                <td>{ report.lead.email }</td>
                                <td>{ report.description && report.description.substring(0,30) }...</td>
                                <td>{ report.created_at }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <OpenReportModal
                isOpen={isOpenReportModal}
                onRequestClose={handleCloseReportModal}
                report={reportModal}/>
            </Container>
        </>
    );
}
