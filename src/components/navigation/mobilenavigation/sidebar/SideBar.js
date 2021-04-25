import './SideBar.css'

export const SideBar = ({drawerIsOpen, drawerHandler}) => {
    return (
        <nav className={drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
            <h1 onClick={() => drawerHandler(false)}>Exit</h1>
        </nav>
    )
}
