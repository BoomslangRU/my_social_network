import s from './preloader.module.css'

const Preloader = () => {
	return (
		<div className={s.preloader}>
			<div className={s.spinner}>
			</div>
		</div>
	)
}

export default Preloader