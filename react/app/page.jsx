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
  {
    title: 'Interactivity queueing challenge',
    description:
      'Fixing the bucketlist.',
    href: '/react_assignment_4_queueing',
  },
  {
    title: 'Interactivity state challenge',
    description:
      'Fixing the +3 counter to not only add +1.',
    href: '/react_assignment_4_state',
  },
  {
    title: 'Vacation task manager',
    description:
      'A task manager for a day off in Kyoto.',
    href: '/react_assignment_5',
  },
  {
    title: 'Mini Battleship game',
    description:
      'A small game of Battleship.',
    href: '/battleship_assignment',
  },
  {
    title: 'Referencing Values 1',
    description:
      'Challenges for useRef.',
    href: '/react_assignment_6_challenges',
  },
  {
    title: 'Referencing Values 2',
    description:
      'Challenges for useRef.',
    href: '/react_assignment_6_challenges/challenge_2',
  },
  {
    title: 'Referencing Values 3',
    description:
      'Challenges for useRef.',
    href: '/react_assignment_6_challenges/challenge_3',
  },
  {
    title: 'Referencing Values 4',
    description:
      'Challenges for useRef.',
    href: '/react_assignment_6_challenges/challenge_4',
  },
  {
    title: 'Referencing Values 5',
    description:
      'Challenges for useRef.',
    href: '/react_assignment_6_challenges/challenge_5',
  },
  {
    title: 'Referencing Values 6',
    description:
      'Challenges for useRef.',
    href: '/react_assignment_6_challenges/challenge_6',
  },
  {
    title: 'Referencing Values 7',
    description:
      'Challenges for useRef. Not working with Vercel.',

  },
  {
    title: 'Referencing Values 8',
    description:
      'Challenges for useRef.',
    href: '/react_assignment_6_challenges/challenge_8',
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