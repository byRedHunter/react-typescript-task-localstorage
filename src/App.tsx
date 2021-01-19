import React, { useState, useEffect } from 'react'

type FormElement = React.FormEvent<HTMLFormElement>

interface ITask {
	name: string
	done: boolean
}

function App(): JSX.Element {
	const [newTask, setNewTask] = useState<string>('')
	const [tasks, setTasks] = useState<ITask[]>([])

	const addTask = (name: string) => {
		const newTasks: ITask[] = [...tasks, { name, done: false }]
		localStorage.setItem('tasks', JSON.stringify(newTasks))
		setTasks(newTasks)
	}

	const handleSubmit = (e: FormElement): void => {
		e.preventDefault()
		addTask(newTask)
		setNewTask('')
	}

	const toggleDoneTask = (i: number): void => {
		const newTasks: ITask[] = [...tasks]
		newTasks[i].done = !newTasks[i].done

		setTasks(newTasks)
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}

	const deleteTask = (i: number): void => {
		let newTasks: ITask[] = [...tasks]
		newTasks.splice(i, 1)

		setTasks(newTasks)
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}

	useEffect(() => {
		const localTasks = localStorage.getItem('tasks')
		if (localTasks) {
			const data: ITask[] = JSON.parse(localTasks)
			setTasks(data)
		}
	}, [])

	return (
		<div className='container p-4'>
			<div className='row'>
				<div className='col-md-6 offset-md-3'>
					<div className='card'>
						<div className='card-body'>
							<form onSubmit={handleSubmit}>
								<input
									className='form-control'
									type='text'
									onChange={(e) => setNewTask(e.target.value)}
									value={newTask}
									autoFocus
								/>

								<button className='btn btn-success btn-block mt-2'>Save</button>
							</form>
						</div>
					</div>
				</div>
			</div>

			<div className='row'>
				{tasks.map((task: ITask, i: number) => (
					<div key={i} className='col-md-4'>
						<div className='card card-body mt-2'>
							<h2 style={{ textDecoration: task.done ? 'line-through' : '' }}>
								{task.name}
							</h2>

							<div className='btn-group'>
								<button
									className='px-5 btn btn-warning'
									onClick={() => toggleDoneTask(i)}
								>
									{task.done ? '✔' : '✖'}
								</button>
								<button
									className='px-5 btn btn-danger'
									onClick={() => deleteTask(i)}
								>
									💣
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default App
