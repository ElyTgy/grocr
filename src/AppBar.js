function AppBar() {

	return (
        <nav class="flex items-center border-b-2 h-20 dark:border-0 dark:bg-green-400 shadow-sm">
        <div>
            <a class="m-4 title-text no-underline
            text-green-400 hover:text-green-400 
            dark:text-white dark:hover:text-white" href="/home">grocr</a>
        </div>
        </nav>
	);
}

export default AppBar;