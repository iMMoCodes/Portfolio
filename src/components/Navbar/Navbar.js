import React from 'react'
import { Toolbar, IconButton, Typography } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import WorkIcon from '@material-ui/icons/Work'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import finFlag from '../../assets/finland-flag.png'
import engFlag from '../../assets/united-kingdom-flag.png'
import github from '../../assets/github.svg'

import useStyles from './styles'

const Navbar = ({ language, setLanguage }) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Toolbar className={classes.navbar}>
				{/* HEADING */}
				<Typography variant='h2' className={classes.title}>
					My Portfolio
				</Typography>
				<div className={classes.imageContainer}>
					<a href='https://github.com/iMMoCodes' target='_blank' rel='noreferrer'>
						<img className={classes.gitHub} src={github} alt='github' />
					</a>
					{/* FLAG */}
					<img className={classes.flag} src={language ? finFlag : engFlag} alt='Flag' onClick={() => setLanguage(!language)} />
				</div>
				{/* ICONS */}
				<div className={classes.iconContainer}>
					<IconButton className={classes.iconButtons} href='#about'>
						<InfoIcon className={classes.infoIcon} />
						<Typography variant='h5' className={classes.subTitle}>
							&nbsp;{language ? 'About' : 'Yleistä'}
						</Typography>
					</IconButton>
					<IconButton className={classes.iconButtons} href='#projects'>
						<WorkIcon className={classes.workIcon} />
						<Typography variant='h5' className={classes.subTitle}>
							&nbsp;{language ? 'Projects' : 'Projektit'}
						</Typography>
					</IconButton>
					<IconButton className={classes.iconButtons} href="#contact">
						<ContactMailIcon className={classes.contactIcon} />
						<Typography variant='h5' className={classes.subTitle}>
							&nbsp;{language ? 'Contact Me' : 'Ota Yhteyttä'}
						</Typography>
					</IconButton>
				</div>
			</Toolbar>
		</div>
	)
}

export default Navbar
