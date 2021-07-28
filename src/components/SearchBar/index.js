import React, { useState, useEffect } from 'react';
//Image
import searchIcon from '../../images/search-icon.svg';
//Styles
import { Wrapper, Content } from './Search.styles';

const SearchBar = ({ setSearchTerm }) => {

	const [state, setState] = useState();

	useEffect(() => {

	}, []);

	return (
		<Wrapper>
			<Content>
				<img src={searchIcon} alt='search-icon' />
				<input
					type='text'
					placeholder='Search Movie'
					onChange={e => setState(e.currentTarget.value)}
					value={state}
				/>
			</Content>	
		</Wrapper>
	);
};

export default SearchBar;