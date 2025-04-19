import { useNavigate } from "react-router-dom";

const Home2 = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/next2");
  };
  const goToNextPage6 = () => {
    navigate("/");
  };

  return (

    <div>
    {/* <div> */}
    {/* <div> */}
      
      <div style={{width: 1512, height: 782, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.05)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', overflow: 'hidden'}}>
    <div style={{width: 510.34, height: 462.05, left: 1375, top: 956.02, position: 'absolute', transform: 'rotate(179deg)', transformOrigin: 'top left', background: 'linear-gradient(180deg, rgba(117.35, 170.70, 123.58, 0.30) 0%, rgba(47.23, 68.70, 49.73, 0.30) 100%)', borderRadius: 9999}} />
    <div style={{width: 262, height: 245, left: 355.13, top: 784.39, position: 'absolute', transform: 'rotate(-18deg)', transformOrigin: 'top left', background: 'linear-gradient(180deg, #59EDB3 28%, #357A30 73%)', borderRadius: 9999}} />
    <div style={{width: 512.31, height: 465.12, left: 387, top: 892.10, position: 'absolute', transform: 'rotate(179deg)', transformOrigin: 'top left', background: 'linear-gradient(180deg, rgba(117.35, 170.70, 123.58, 0.30) 0%, rgba(47.23, 68.70, 49.73, 0.30) 100%)', borderRadius: 9999}} />
    <div style={{width: 314.50, height: 326.20, left: 935.98, top: 233.19, position: 'absolute', transform: 'rotate(31deg)', transformOrigin: 'top left', background: 'linear-gradient(90deg, #75DEA1 38%, #3F7857 76%)'}} />
    <div style={{width: 111.53, height: 93.05, left: 1471.63, top: -50, position: 'absolute', transform: 'rotate(58deg)', transformOrigin: 'top left', background: 'linear-gradient(90deg, #13715A 70%)'}} />
    <div style={{width: 540.43, height: 544.68, left: -142, top: 343.45, position: 'absolute', transform: 'rotate(-51deg)', transformOrigin: 'top left', background: 'linear-gradient(180deg, #EDF2EE 0%, #1F5F27 100%)', borderRadius: 9999}} />
    <div style={{width: 1527, height: 782, left: -15, top: 0, position: 'absolute', background: 'rgba(19, 144, 114, 0.50)', border: '1.50px white solid', backdropFilter: 'blur(50px)'}} />

    
    <div className="card" style={{width: '30rem', height:'28rem'}}>
    <div className="card-body">
      <h1 className="card-title">Welcome !</h1>
      <p className="card-text" style={{fontSize:'22px'}}>
        All your information will be private, so there is no login.
        Just choose a nickname and we are good to go.
      </p>
      
    </div>
        <input className="form" style={{fontSize:'22px'}} list="datalistOptions" id="exampleDataList" placeholder="Choose a nickname..." />
      <button
      onClick={goToNextPage}
       type="button" className="btn1 btn-light"  style={{fontSize:'18px'}} href="/button" >
        SUBMIT</button>
  </div>   
  <div>
  <button
      onClick={goToNextPage6}
       type="button" className="btn1 btn-light"  style={{left: 220, top: 66,width: 153, height: 50, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 22, fontFamily: 'Cairo', fontWeight: '700', wordWrap: 'break-word', textShadow: '0px 4px 4px rgba(61, 58, 58, 0.86)'}} href="/button" >
        Home</button>
  </div>
    </div>
    <div style={{width: 99, height: 45, left: 50, top: 40, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Ledger', fontWeight: '400', wordWrap: 'break-word'}}>
      <img style={{width: 50, height:50 ,borderRadius: 50}} src="https://media.istockphoto.com/id/1178300012/vector/green-ribbon-mental-health-icon.jpg?s=612x612&w=0&k=20&c=-PXiN6QdT9EVsULfqDFwogZL8yv91UMsKkgUEfCpdvU=" alt=""/>
      </div>
    </div>
  
  );
};

export default Home2;
