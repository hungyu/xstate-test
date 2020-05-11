import React from 'react';
import styled from 'styled-components';

const StyledLight = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 10px;
	background: ${props => props.light? props.light : 'grey'};
	display: inline-block;
	margin-left: 10px;
`;

const Light = ({ light }) => (
	<StyledLight light={light}/>
)

export default Light;