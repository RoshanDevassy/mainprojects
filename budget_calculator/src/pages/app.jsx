import './app.css'
import Budget_Income from '../components/budget_income';


const App = () => {
  return (
    <>
      <div className="h-full  font-serif bg-slate-300 p-2 flex justify-center">
        <div className="app-shadow rounded-lg p-1 mt-5 2xl:w-[75%] 3xl:w-[65%] 3xl:p-10">
          <Budget_Income/>
        </div>
      </div>
    </>
  );
};

export default App;
