import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
	@font-face {
		font-family: 'Nunito';
		font-style: normal;
		font-weight: 900;
		src: url('./fonts/nunito-v24-latin-900.eot'); 
		src: local(''),
			url('./fonts/nunito-v24-latin-900.eot?#iefix') format('embedded-opentype'), 
			url('./fonts/nunito-v24-latin-900.woff2') format('woff2'), 
			url('./fonts/nunito-v24-latin-900.woff') format('woff'),
			url('./fonts/nunito-v24-latin-900.ttf') format('truetype'),
			url('./fonts/nunito-v24-latin-900.svg#Nunito') format('svg');
	}

	@font-face {
		font-family: 'Nunito';
		font-style: normal;
		font-weight: 700;
		src: url('./fonts/nunito-v24-latin-700.eot');
		src: local(''),
			url('./fonts/nunito-v24-latin-700.eot?#iefix') format('embedded-opentype'),
			url('./fonts/nunito-v24-latin-700.woff2') format('woff2'),
			url('./fonts/nunito-v24-latin-700.woff') format('woff'),
			url('./fonts/nunito-v24-latin-700.ttf') format('truetype'),
			url('./fonts/nunito-v24-latin-700.svg#Nunito') format('svg');
	}	

	@font-face {
		font-family: 'Nunito';
		font-style: normal;
		font-weight: 600;
		src: url('./fonts/nunito-v24-latin-600.eot');
		src: local(''),
			url('./fonts/nunito-v24-latin-600.eot?#iefix') format('embedded-opentype'), 
			url('./fonts/nunito-v24-latin-600.woff2') format('woff2'),
			url('./fonts/nunito-v24-latin-600.woff') format('woff'),
			url('./fonts/nunito-v24-latin-600.ttf') format('truetype'), 
			url('./fonts/nunito-v24-latin-600.svg#Nunito') format('svg');
	}	
`;