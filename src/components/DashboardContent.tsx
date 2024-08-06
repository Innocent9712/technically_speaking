export function DashboardContent (props: Readonly<{project: number}>) {
    const {project} = props;
    return (
        <div>
            <h1>Dashboard Content</h1>
            <p>Project: {project}</p>
        </div>
    )
}

