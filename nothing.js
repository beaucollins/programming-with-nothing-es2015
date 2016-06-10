/*eslint new-cap: "off"*/
/*

FizzBuzz only using arrow functions

*/

export const Z = f => ( x => f( y => x( x )( y ) ) )
                      ( x => f( y => x( x )( y ) ) )
export const ZERO = () => x => x
export const ONE = p => x => p( x )

export const TRUE = x => () => x
export const FALSE = () => y => y

export const INCREMENT = n => p => x => p( n( p )( x ) )
export const DECREMENT = n => f => x => n( g => h => h( g( f ) ) )
                                         ( () => x )( y => y )

export const ADD = m => n => n( INCREMENT )( m )
export const SUBTRACT = m => n => n( DECREMENT )( m )
export const MULTIPLY = m => n => n( ADD( m ) )( ZERO )
export const POWER = m => n => n( MULTIPLY( m ) )( ONE )

export const IF = b => b
export const IS_ZERO = n => n( () => FALSE )( TRUE )
export const IS_LESS_OR_EQUAL = m => n => IS_ZERO( SUBTRACT( m )( n ) )

export const MOD = Z( f => m => n => IF( IS_LESS_OR_EQUAL( n )( m ) )( x => f( SUBTRACT( m )( n ) )( n )( x ) )( m ) )

export const TWO = p => x => p( p( x ) )
export const THREE = p => x => p( p( p( x ) ) )
export const FIVE = p => x => p( p( p( p( p( x ) ) ) ) )
export const EIGHT = ADD( FIVE )( THREE )
export const NINE = ADD( EIGHT )( ONE )
export const FIFTEEN = p => x => p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( x ) ) ) ) ) ) ) ) ) ) ) ) ) ) )
export const HUNDRED = p => x => p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( p( x ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) )

export const PAIR = x => y => f => f( x )( y )
export const LEFT = p => p( x => () => x )
export const RIGHT = p => p( () => y => y )

export const EMPTY = PAIR( TRUE )( TRUE )
export const UNSHIFT = l => x => PAIR( FALSE )( PAIR( x )( l ) )
export const IS_EMPTY = LEFT
export const FIRST = l => LEFT( RIGHT( l ) )
export const REST = l => RIGHT( RIGHT( l ) )

export const RANGE = Z( f => m => n =>
	IF( IS_LESS_OR_EQUAL( m )( n ) )(
		x => UNSHIFT( f( INCREMENT( m ) )( n ) )( m )( x )
	)(
		EMPTY
	)
)

export default ( out ) => {
	let i = ZERO;
	while ( i < HUNDRED ) {
		i ++;
		IF( IS_ZERO( MOD( i )( FIFTEEN ) ) )( () => {
			out( 'FizzBuzz' )
		} )( IF( IS_ZERO( MOD( i )( THREE ) ) )( () => {
			out( 'Fizz' )
		} )( IF( IS_ZERO( MOD( i )( FIVE ) ) )( () => {
			out( 'Buzz' )
		} )( () => {
			out( i )
		} ) ) )
	}
}
