import {  useState,  }  from 'react';

import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";

function App(){
 
  const [value,setValue]= useState("")
  const [results, setResults] = useState([]);
  const fetchImage = async()=>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=P1pbMpJLQAn6_wpmRNE1a0Op09K3U0AD08HPUqgeXnA&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setResults(data.results)
    })
  }
  return(
    <div className='container'>
      <br></br>
      <br></br>
      <br></br>
      <div className="homescreen" >
      <Box
            width={'100%'}
            sx={{
              background: 'url(https://source.unsplash.com/random)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: {xl: '650px', lg: '570px', md: '550px', sm: '550px', xs: '550px'},
              display: 'flex',
              alignItems: 'center',
            }}
        >
          <Container maxWidth={'lg'}>
            <Box p={1} color={'white'} width={'100%'}  display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
              <Box maxWidth={{lg: '700px', md: '600px', sm: '600px', xs: '600px'}}>
                <Box mb={3} fontSize={{lg: '37px', md: '37px', sm: '30px', xs: '25px'}} fontWeight={'600'}>
                    {'LookBook'}
                </Box>
                <Box mb={2}>
                  The  source of freely-usable images. Powered by creators everywhere.
                </Box>
                <div className="search" >
                  <input
                      type="text"
                      className="searchTerm"
                      placeholder="What are you looking for?"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                  />
                  <button onClick={()=>fetchImage()}  className="searchButton">
                    <SearchIcon />
                  </button>
                </div>                   
        
              </Box>
            </Box>
            
          </Container>
          
        </Box>
        
      </div><div className='homescreen'>
        {
          results.map((item)=>{
            return <img className='item' key={item.id}src={item.urls.regular}/>
          })
        }
        
      </div>
      </div>);
  //               {/* <span>Search:</span>
  //               <input 
  //               style={{ width: "60 %" }}
  //               type="text" 
  //               value={value} 
  //               onChange={(e)=>setValue(e.target.value)}/>
  //               <button onClick={()=>fetchImage()}>send</button> */}
  {/* //     </div>
      <div className='homescreen'>
        {
          results.map((item)=>{
            return <img className='item' key={item.id}src={item.urls.regular}/>
          })
        }
        
      </div>
      
  
  //   </div> */}
  // 
}
export default App;
