import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import s from './ModalWindowError.module.css'
import styleButton from '../../../styles/styleButton.module.css'
import { FC } from 'react'

type propsType = {
    globalError: null | string
    setGlobalError: any
}

const ModalWindowError: FC<propsType> = ({ globalError, setGlobalError }) => {

    const handleClose = () => {
        globalError = null
    }

    return (
        <Modal className={s.modal}
            open={!!globalError}
            onClose={handleClose}
            basic
            size='small'
        >
            <div className={s.modalDialog}>
                <Header className={s.modalHeader} icon='browser' content='window error' />
                <Modal.Content>
                    <h3>{globalError}</h3>
                </Modal.Content>
                <Modal.Actions className={styleButton.buttonBlock}>
                    <Button onClick={() => setGlobalError(null)} inverted>
                        <Icon name='check' /> Exit window
                    </Button>
                </Modal.Actions>
            </div>
        </Modal>
    )
}

export default ModalWindowError
