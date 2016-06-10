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
export const IS_ZERO = n => n( () => FALSE )( TRUE )

export default ( out ) => {
	let i = ZERO;
	while ( i < HUNDRED ) {
		i ++;
		IF( IS_ZERO( i % FIFTEEN ) )( () => {
			out( 'FizzBuzz' )
		} )( IF( IS_ZERO( i % THREE ) )( () => {
			out( 'Fizz' )
		} )( IF( IS_ZERO( i % FIVE ) )( () => {
			out( 'Buzz' )
		} )( () => {
			out( i )
		} ) ) )
	}
}
