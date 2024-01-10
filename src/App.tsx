import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Characters } from './components/Characters';

function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Characters />
		</QueryClientProvider>
	);
}

export default App;
