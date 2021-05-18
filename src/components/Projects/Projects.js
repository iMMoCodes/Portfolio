import React, { useState } from 'react'
import './styles.css'
import { data } from './projectData'
import GitHubIcon from '@material-ui/icons/GitHub'
console.log(data)

const Projects = ({ language }) => {
	const [projectId, setProjectId] = useState(0)
	return (
		<main className='projectsContainer' id='projects'>
			<h1 className='projectsTitle'>{language ? 'Projects' : 'Projektit'}</h1>
			<section className='projectsArea'>
				<div className='projectChoiceButtons'>
					<button className='projectChoiceButton' onClick={() => setProjectId(0)}>
						{language ? data[0].name : data[0].nimi}
					</button>
					<button className='projectChoiceButton' onClick={() => setProjectId(1)}>
						{language ? data[1].name : data[1].nimi}
					</button>
					<button className='projectChoiceButton' onClick={() => setProjectId(2)}>
						{language ? data[2].name : data[2].nimi}
					</button>
					<button className='projectChoiceButton' onClick={() => setProjectId(3)}>
						{language ? data[3].name : data[3].nimi}
					</button>
					<button className='projectChoiceButton' onClick={() => setProjectId(4)}>
						{language ? data[4].name : data[4].nimi}
					</button>
					<button className='projectChoiceButton' onClick={() => setProjectId(5)}>
						{language ? data[5].name : data[5].nimi}
					</button>
				</div>
				<div className='projectImageArea' style={{ backgroundImage: `url("${data[projectId].image}")` }}>
					<div className='projectStackArea'>
						{data[projectId].stacks.map((stack) => {
							return <img className='projectStackImage' src={stack} alt='stack' />
						})}
					</div>
					<div className='projectImageButtonContainer'>
						<a href={data[projectId].live} className='projectChoiceButton' style={{ margin: '0 10px' }} target='_blank' rel='noreferrer'>
							{language ? 'Test Live' : 'Koita itse'}
						</a>
						<a href={data[projectId].github} className='projectChoiceButton' style={{ margin: '0 10px' }} target='_blank' rel='noreferrer'>
							<GitHubIcon fontSize='small' />
						</a>
					</div>
				</div>
				<div className='projectInfoArea'>
					<h1 className='projectsSubTitle'>{language ? data[projectId].name : data[projectId].nimi}</h1>
					<p className='projectParagraph'>{language ? data[projectId].description : data[projectId].kuvaus}</p>
					<h2>{language ? 'Biggest problem' : 'Suurin ongelma'}</h2>
					<p className='projectParagraph'>{language ? data[projectId].problem : data[projectId].ongelma}</p>
				</div>
			</section>
		</main>
	)
}

export default Projects
