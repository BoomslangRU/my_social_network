import { Fragment } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import s from './ModalWindowError.module.css'

const ModalWindowError = ({ globalError, setGlobalError }) => {

    const onClickButton = (e) => {
        setGlobalError(null)
    }

    return (
        <Fragment>
            <Modal className={s.modal}
                open={globalError}
                onClose={!globalError}
                basic
                size='small'
            >
                <div className={s.modalDialog}>
                    <Header className={s.modalHeader} icon='browser' content='Window error' />
                    <Modal.Content>
                        <h3>{globalError}</h3>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={onClickButton} inverted>
                            <Icon name='check' /> Exit window
                        </Button>
                    </Modal.Actions>
                </div>
            </Modal>
        </Fragment>
    )
}

export default ModalWindowError
// className={s.modal}