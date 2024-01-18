import './App.css'
import CategoriesSidebar from './components/Sidebar/CategoriesSidebar';
import CountriesSidebar from './components/Sidebar/CountriesSidebar';

function App() {
    return (
        <div className='grid grid-flow-col grid-cols-[200px_1fr_200px]'>
            <CategoriesSidebar />
            <div>
               
            </div>
            <CountriesSidebar />
        </div>
    );
}

export default App;
