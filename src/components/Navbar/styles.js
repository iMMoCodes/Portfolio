import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	navbar: {
		position: 'fixed',
		width: '100vw',
		display: 'flex',
		backgroundColor: '#212121',
		zIndex: 999,
	},
	title: {
		flexGrow: 1,
		color: '#bdbdbd',
		fontFamily: 'Merriweather, serif',
	},
	subTitle: {
		color: '#bdbdbd',
		fontFamily: 'Merriweather, serif',
	},
	imageContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	// Github
	gitHub: {
		backgroundColor: '#bdbdbd',
		height: '30px',
		width: '30px',
		borderRadius: '50%',
	},
	// Flags
	flag: {
		cursor: 'pointer',
		margin: '0 20px',
		height: '20px',
		width: '30px',
	},
	// Icons
	iconContainer: {
		display: 'flex',
		width: '500px',
	},
	infoIcon: {
		color: '#90caf9',
	},
	workIcon: {
		color: '#bcaaa4',
	},
	contactIcon: {
		color: '#a5d6a7',
	},
	// Responsiveness
	// SM
	[theme.breakpoints.down('sm')]: {
		navbar: {
			flexDirection: 'column',
		},
		flag: {
			marginRight: '0',
		},
	},
	[theme.breakpoints.down('xs')]: {
		iconContainer: {
			flexDirection: 'column',
			marginTop: '4px',
		},
		iconButtons: {
			padding: '1px',
		},
		subTitle: {
			fontSize: '20px',
		},
		infoIcon: {
			height: '20px',
		},
		workIcon: {
			height: '20px',
		},
		contactIcon: {
			height: '20px',
		},
	},
}))

export default useStyles
