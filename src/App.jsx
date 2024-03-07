
import './App.css'
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      person: {
        fullName: "Benjamin Solomon Carson, Sr.",
        bio: "Ben Carson (born September 18, 1951, Detroit, Michigan, U.S.) American politician and neurosurgeon who performed the first successful separation of conjoined twins who were attached at the back of the head (occipital craniopagus twins). The operation, which took place in 1987, lasted some 22 hours and involved a 70-member surgical team. Carson also refined a technique known as hemispherectomy, in which one-half of the brain is removed to prevent seizures in persons with severe epilepsy. He later became active in politics and served as U.S. secretary of housing and urban development (HUD; 2017–21) in the administration of U.S. Pres. Donald Trump.In 1994 Carson cofounded the Carson Scholars Fund, an organization that awarded scholarships to students who had demonstrated academic excellence and community service. He received numerous awards during his career, including the 2008 Presidential Medal of Freedom, given to him by U.S. Pres. George W. Bush. Carson also traveled as a motivational speaker, was an outspoken supporter of creationism, and was the subject of the 2009 made-for-television movie Gifted Hands: The Ben Carson Story. The movie took its title from Carson’s autobiography, Gifted Hands (1990; with Cecil Murphey).",
        img: "https://cdn.britannica.com/06/150606-050-B13EFA9B/Ben-Carson.jpg" ,
        profession: "American neurosurgeon and politician",

      },
      show:false,
      mountTime:null,
    };
  }

  componentDidMount() {
    this.setState({mountTime: new Date()});
  }

  toggleShow = ()=>{
    this.setState((prevState)=>({show: !prevState.show}));
  };

  render(){
    const { person, show, mountTime} = this.state;

    return (
      <div className='bg-slate-200 p-5 pl-10 pr-10 '>
        <button onClick={this.toggleShow} className='w-full rounded border-gray-400 border p-1 text-[1.1rem] font-bold text-gray-500 bg-white'>toggle</button>
        {show &&<div>
          <h2 className='mt-5 mb-3 text-2xl'><b>{person.fullName}</b></h2>
        <p className='mb-7 text-[1.1rem]'><b>Profession: </b>{person.profession}</p>
        <div className='lg:flex flex-row-reverse max-w-[rem]'>
        <div className='rounded-xl shadow-xl mb-7 lg:w-full bg-slate-100'>
          <img className='rounded-t-xl w-full ' src={person.img} alt="" />
          <p className='ml-5 p-4 text-lg text-blue-600'>Ben Carson</p>
        </div>
        <div className='pr-10'>
        <h4 className='text-[1.1rem]'><b>Biography</b></h4>
        <p className='lg:leading-6 lg:text-balance tracking-wider text-justify text-[1.1rem] pt-2'>{person.bio}</p>
        </div>
        </div>
        </div>
  }
   {mountTime && (
            <p  className="px-6 text-blue-400">
              Component mounted {Math.floor((new Date() - mountTime) / 1000)}{" "}
              seconds ago.
            </p>
          )}
      </div>
    );
  }
}

// function App() {
//  const [show, setShow] = useState(true)

// function handleClick (args){
//   setShow(!show)
// }

  

export default App
