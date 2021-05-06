import React from 'react';
import Styled from "styled-components";

const SearchBarWrap = Styled.div`
form{
    display: flex;
    justify-content: center;
}

input{
    width: 300px;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    margin-bottom: 40px;
    background: none;
    border: 3.5px solid white;
}

input::placeholder {
    color: white;
  }

  input:focus {
    outline: none;
  }

h1{
    font-size: 40px;
    cursor: default;
    color: #FFFFFF;
    text-shadow: 0 0 10px #FFFFFF;

}`;

const SearchBar = ({ getUser }) => {
    const [userName, setUserName] = React.useState("");

    const handleChange = event => {
        setUserName(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        getUser(userName);
        setUserName("");
    }

    return (
        <SearchBarWrap>
            <h1>GitHub Profile Finder</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="GitHub 아이디를 입력해주세요."
                    value={userName}
                    onChange={handleChange} />
            </form>
        </SearchBarWrap>
    );
};

export default SearchBar;