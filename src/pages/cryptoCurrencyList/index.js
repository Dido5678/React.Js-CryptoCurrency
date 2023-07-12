import React from "react";
import Table from '../../components/table';
import Loading from '../../components/loading';
import Pagination from '../../components/pagination';



class CryptoCurrencyList extends React.Component {
    // dzevavorvuma statey,propsy
    constructor () {
        super();
        // local objectn e, vori mej grum es componenti popoxutyunnery
        this.state = {
            // asxatuma constructory 1-y
            loading: false,
            data: [],
            error: null, 
            page: 1,

        }

    }

    async hanleGetCurrenciesList() {
        const { page } = this.state;
        this.setState({
            loading: true
        })

        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/?page=${page}&per_page=10`);
            const result = await response.json();
            // console.log(data);
            this.setState({
                data: result
            })

        } catch(error) {
            // setState----->result
            this.setState({
                error: 'Errrror Oooooooops'
            })
        } finally {
            this.setState({
                loading: false,
               
            })
        }
    }

    handleChangePagination = (direction) => {
        const { page } = this.state;
        const currentPage = direction === 'next' ? page + 1 : page - 1;
        this.setState ({
            page: currentPage
        }, this.hanleGetCurrenciesList)
    }

    //  1 mounth
    componentDidMount() {
        // backend zaprosner enq kancum funkcian u nkarum 4 -ov/ backend data
        this.hanleGetCurrenciesList();
    }

    // 2-y table sarqum,DOM-um bana cuyc talis
    // 

    

    render() {
        const { loading, error, page, data } = this.state;
        // console.log(this.state);
        if(error) {
            return (
            <div className="error">
                <p>{error}</p>
            </div>
            )
        }

        if(loading) {
            return (
                <div className='loading-container'>
                    <Loading width="80px" height="80px"/>
                </div>
            )
        }
         
        return(

            <div>
                {/* backendic ekac datan nkaruma */}
                {/* Table---->props */}
                <Table currencyList={data}/>
                <Pagination 
                    page={page}
                    onHandleChangePagination={this.handleChangePagination}/>
               
            </div>
        )
    }
}


// loading miacnel
// backendic data berel
// anjatel loadingy

export default CryptoCurrencyList;













// ==========================================
    // GRVAC E ARANC ASYNC AWAIT
    // // 3-y data enq kanchum backendic
    // hanleGetCurrenciesList()  {
    //     // minch ays loadingy mianuma
    //     this.setState ({
    //         loading: true
    //     })
    //     // ---> render
    //     fetch('https://api.coingecko.com/api/v3/coins/?per_page=10')
    //     .then((response) => {
    //         return response.json()
    //     })
    //     .then((data) => {
    //         console.log(data);
    //         this.setState({
    //             loading: false
    //         })
    //     })
    //     .catch(() => {
    //         console.log('error')
    //         // console.log(error);
    //     })
    // }
// ==========================================