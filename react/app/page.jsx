import Link from 'next/link';

const projects = [
  {
    title: 'React Counter Page',
    description:
      'A page with buttons that count how many times they are clicked. You might find a secret if you click enough.',
    href: '/react_assignment_1',
  },
  {
    title: 'Tic Tac Toe',
    description:
      'A game of Tic Tac Toe with the ability to look through your past moves.',
    href: '/react_assignment_2',
  },
  {
    title: 'Pure clock',
    description:
      'Purified clock challenge.',
    href: '/react_assignment_3_clock',
  },
  {
    title: 'Pure profile',
    description:
      'Purified profile challenge.',
    href: '/react_assignment_3_profile',
  },
  {
    title: 'Pure story',
    description:
      'Purified story challenge.',
    href: '/react_assignment_3_story',
  },
];

export default function Page() {
  return (
    <main>
      <h1>My Projects</h1>
      <p>Select a project to view it.</p>

      <nav aria-label="Project navigation">
        <ul>
          {projects.map((project) => (
            <li key={project.href}>
              <Link href={project.href}>{project.title}</Link>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}