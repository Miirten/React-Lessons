import Link from 'next/link';

const projects = [
    {
        title: "React Counter Page",
        description: "A page with buttons that count how many times they are clicked. You might find a secret if you click enough.",
        href: "/react_asssignment_1"
    }
];

export default function Page() {
    return (
        <main>
            <h1>My Projects</h1>
            <p>Select a project to view it.</p>

            <nav aria-label="Project Navigation">
                <ul>
                    {projects.map((project) => (
                        <li key={project.href}>
                            <Link href={project.href}>
                            {project.title}
                            </Link>

                            <p>{project.description}</p>
                        </li>
                    ))}
                </ul>
            </nav>
        </main>
    );
}