
export function MainLayout({ children }: any) {
    return (<>
        <div className="min-h-screen p-2">
            {children}
        </div>
    </>)
}

export default MainLayout;