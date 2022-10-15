import { faWallet,faSquareMinus,faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import Graph_card from '../components/graph_card'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { useState } from 'react';





export default function Home() {
  
  let m=new Map([
    [1,'January'],
    [2,'February'],
    [3,'March'],
    [4,'April'],
    [5,'May'],
    [6,'June'],
    [7,'July'],
    [8,'August'],
    [9,'September'],
    [10,'October'],
    [11,'November'],
    [12,'December'],
  ]);
  let n=new Map([
    [1,31],
    [2,28],
    [3,31],
    [4,30],
    [5,31],
    [6,30],
    [7,31],
    [8,31],
    [9,30],
    [10,31],
    [11,30],
    [12,31],
  ]);
  const [month,setmonth]=useState('January');

  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  let data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,1,1,1,1,45,32],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [32,65,78,98,9,23,90],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  let changeMonth=(e)=>{setmonth(e.target.value)}

  return (
    <>
    <div className='text-[35px] text-dark_heading mt-[10px] pl-[1vw] border-b-[3px] border-black sticky top-[0px] bg-white'>Dashboard</div>
    <div className='flex flex-wrap justify-center mt-[10px]'>
      <Graph_card bg_color="dark-background" icon={faSquarePlus} text="Total Income" amount="567" />
      <Graph_card bg_color="dark-background" icon={faWallet} text="Total Saving" amount="567" />
      <Graph_card bg_color="dark-background" icon={faSquareMinus} text="Total Expense" amount="567" />
    </div>
    <div className='w-[90%] max-w-[1200px] mx-auto mt-[5vh] mb-[20px]'>
      <div className='flex justify-between'>
        <h3 className='font-bold text-[30px]'>Expense</h3>
        <select className='w-[150px] border-[2px]' onChange={changeMonth}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

      </div>
      <Bar options={options} data={data}/>;
    </div>
    </>
  )
}
