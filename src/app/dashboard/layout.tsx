export default function DashboardLayout({
    children, // will be a page or a nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            {children}
        </section>
    )
}