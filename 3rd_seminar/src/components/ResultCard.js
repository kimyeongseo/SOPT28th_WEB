import React from 'react';
import Styled from 'styled-components';

const ResultCardWrap = Styled.div`
img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 7px 14px 7px rgba(255,255,255,0.35); 
    box-shadow: 0px 7px 14px 7px rgba(255,255,255,0.35);
}


.result_card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 450px;
}

.result_id{
    font-size: 30px;
    font-weight: 700;
    color: rgb(238, 255, 145);
    margin: 20px 0px 35px 0px;
}

.result_list{
    display: flex;
}

.result_list > div{
    font-size: 22px;
    text-align: center;
    width: 100px;
    margin: 10px 15px;
    color: white;
}

.info{
    text-align: center;
    font-size: 35px;
    margin: 15px 0px;
    font-weight: 700;
    color: white;
}
`;

const ResultCard = ({ data }) => {
    return data && (
        <ResultCardWrap>
            <div className='result_card'>
                <img src={data.avatar_url} alt="" />
                <p className='result_id'>{data.login}</p>
                <div className='result_list'>
                    <div className='result_followers'>Followers
                    <p className="info">{data.followers}</p></div>
                    <div className='result_following'>Following
                    <p className="info">{data.following}</p></div>
                    <div className='result_repos'>Repos
                    <p className="info"> {data.public_repos} </p></div>
                </div>
            </div>
        </ResultCardWrap>
    );
}

export default ResultCard;