import * as React from 'react'
import styles from '../styles/Home.module.css'

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
	return (
		<>
			<h1>Erson Puyos - Blog</h1>
			<h1 className="heading">Blogs</h1>
		</>
	)
}

export default App;