/*

FizzBuzz only using arrow functions

*/

export const ZERO = () => x => x
export const ONE = p => x => p( x )
export const TWO = p => x => p( p( x ) )
export const THREE = p => x => p( p( p( x ) ) )
export const FIVE = p => x => p( p( p( p( p( x ) ) ) ) )
export const FIFTEEN = p => x => p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( x ) ) ) ) ) ) ) ) ) ) ) ) ) ) )
export const HUNDRED = p => x => p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( x ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) )

export const TRUE = x => () => x
export const FALSE = () => y => y

export const IF = b => b

export default ( out ) => {
	let i = ZERO;
	while ( i < HUNDRED ) {
		i ++;
		if ( i % FIFTEEN === ZERO ) {
			out( 'FizzBuzz' )
		} else if ( i % THREE === ZERO ) {
			out( 'Fizz' )
		} else if ( i % FIVE === ZERO ) {
			out( 'Buzz' )
		} else {
			out( i )
		}
	}
}
