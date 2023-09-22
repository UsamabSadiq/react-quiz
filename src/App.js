import './App.css';
import Header from './components/Header';
import QuestionAnswers from './components/QuestionAnswers';

function App() {
  return (
    <div className='max-w-[1400px] mx-auto p-3'>
      <Header />
      <QuestionAnswers />
    </div>
  );
}

export default App;
