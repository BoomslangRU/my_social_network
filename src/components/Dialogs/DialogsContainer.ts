import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { initialStateDialogsPageType, sendMessage } from '../../redux/dialogsReducer'
import { RootStore } from '../../redux/storeRedux'
import Dialogs from './Dialogs'

type mapStateType = {
	dialogsPage: initialStateDialogsPageType
}

type mapDispatchType = {
	sendMessage: (massageBody: string) => void
}

const mapStateToProps = (state: RootStore) => ({
	dialogsPage: state.dialogsPage
})

export default compose(
	withAuthRedirect,
	connect<mapStateType, mapDispatchType, null, RootStore>(mapStateToProps, { sendMessage })
)(Dialogs)