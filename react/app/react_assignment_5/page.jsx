'use client'

import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';
import Link from 'next/link';

export default function TaskApp() {
  return (
    <main>
      <Link href="/">← Back to projects</Link>

    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
    </main>
  );
}
