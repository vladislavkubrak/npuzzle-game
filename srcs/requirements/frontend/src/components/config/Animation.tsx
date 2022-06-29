import styled, { keyframes } from 'styled-components';

export const drive = keyframes`
	0% {
		transform: translateX(-70%);
	}
	100% {
		transform: translateX(0);
	}  
`

export const rotate = keyframes`
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(1.01);
  }

  50% {
    transform: scale(1.03);
  }

  75% {
    transform: scale(1.01);
  }

  100% {
    transform: scale(1);
  }
`;

export const appear = keyframes`
  0% {
	opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const text = keyframes`
	0%, 7% {
		opacity: 0;
	}
	15% {
		opacity: .55;
	}
	20% {
		opacity: .40;
	}
	25% {
		opacity: .25;
	}
	30% {
		opacity: 0.6;
	}
	35% {
		opacity: .90;
	}
	40%, 100% {
		opacity: 1;
	}  
`

export const cup = keyframes`
	0% {
		transform: scale(1);
	}
	25% {
		transform: scale(1.2);
	}
	50% {
		transform: scale(1.3);
	}
	75% {
		transform: scale(1.2);
	}
	100% {
		transform: scale(1);
	}
`

export const cupSlow = keyframes`
	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-6px);
	}
	100% {
		transform: translateY(0);
	}
`

export const wiggle = keyframes`
	0%, 7% {
		transform: rotateZ(0);
	}
	15% {
		transform: rotateZ(-15deg);
	}
	20% {
		transform: rotateZ(10deg);
	}
	25% {
		transform: rotateZ(-10deg);
	}
	30% {
		transform: rotateZ(6deg);
	}
	35% {
		transform: rotateZ(-4deg);
	}
	40%, 100% {
		transform: rotateZ(0);
	}  
`