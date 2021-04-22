import React, { useState } from 'react';

import { HeaderReports } from '../../../components/Header/HeaderReports';
import { ReportsTable } from '../../../components/ReportsTable';
import Modal from 'react-modal';

import {
    Container,
} from './styles';
import { NewLeadModal } from '../../../components/Modal/NewLeadModal';

Modal.setAppElement('#root');

export const Reports: React.FC = () => {
    const [isNewLeadModalOpen, setIsNewLeadModalOpen] = useState(false);

    function handleOpenNewLeadModal() {
        setIsNewLeadModalOpen(true);
    }

    function handleCloseNewLeadModal() {
        setIsNewLeadModalOpen(false);
    }

    return (
        <>
            <HeaderReports OnOpenNewLeadModal={handleOpenNewLeadModal}/>
            <Container>
                <ReportsTable/>
                <NewLeadModal
                    isOpen={isNewLeadModalOpen}
                    onRequestClose={handleCloseNewLeadModal}
                />
            </Container>
        </>
    );
};

