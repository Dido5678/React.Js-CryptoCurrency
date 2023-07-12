import { renderChangePercent} from '../../helpers/renderChangePercent';
import './index.css';

// --->{object uni, keya dzevavorvel  / currency: {}, line: 2}
const Table = (props) => {
    // console.log(props,'props >>>>>');

    // const trResult = props.currencyList.map(() => {
    //     return(
    //         <tr>
    //             <td></td>
    //             <td></td>
    //         </tr>
    //     )
    // });

    // console.log(trResult);

    // JAVASCRIPTOV VOR UZENAYNQ GREYNQ
    // const list = props.currencyList.forEach(element => {
    //     const tr = documnet.createElement('tr');
    //     const td = documnet.createElement('td');
    //     Id.inneHTML=
    // })
  
    return (
        <div className='Table-container'> 
            <table className='Table'>
                <thead className='Table-head'>
                    <tr>
                        <th>ID</th>
                        <th>Logo</th>
                        <th>Cryptocurrency</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>24H Change</th>
                    </tr>
                </thead>
                <tbody className='Table-body'>
                    {/* estex dzerqov datanery karox enq avelacnel kam propsov map franq ev stanan q datanery */}
                    {/* th/td */}
                    {
                        props.currencyList.map((item) =>{
                            // console.log(item);
                            return(
                                <tr>
                                    <td>{item.symbol}</td>
                                    <td>
                                        <img src={item.image.thumb} alt={item.name}/>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                       <b>$</b> {item.market_data.current_price.usd}
                                    </td>
                                    <td>
                                        {item.market_data.market_cap_rank}
                                    </td>
                                    <td>
                                        { renderChangePercent(item.market_data.market_cap_change_percentage_24h)}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        )
};

export default Table;