/*eslint new-cap: "off"*/
import { equal, ok } from 'assert'

import {
	ZERO,
	ONE,
	TWO,
	THREE,
	FIVE,
	NINE,
	FIFTEEN,
	HUNDRED,
	TRUE,
	FALSE,
	IF,
	IS_ZERO,
	INCREMENT,
	DECREMENT,
	ADD,
	SUBTRACT,
	MULTIPLY,
	POWER
} from '../nothing'

const to_integer = ( fn ) => fn( x => x + 1 )( 0 )
const to_boolean = ( fn ) => IF( fn )( true )( false )
describe( 'nothing', () => {
	it( 'ZERO should be 0', () => equal( to_integer( ZERO ), 0 ) )
	it( 'ONE should be 1', () => equal( to_integer( ONE ), 1 ) )
	it( 'TWO should be 2', () => equal( to_integer( TWO ), 2 ) )
	it( 'THREE should be 3', () => equal( to_integer( THREE ), 3 ) )
	it( 'FIVE should be 5', () => equal( to_integer( FIVE ), 5 ) )
	it( 'FIFTEEN should be 15', () => equal( to_integer( FIFTEEN ), 15 ) )
	it( 'HUNDRED should be 100', () => equal( to_integer( HUNDRED ), 100 ) )
	it( 'TRUE should be true', () => ok( to_boolean( TRUE ) ) )
	it( 'FALSE should be false', () => ok( ! to_boolean( FALSE ) ) )
	it( 'ZERO is IS_ZERO', () => ok( to_boolean( IS_ZERO( ZERO ) ) ) )
	it( 'non-ZERO is not IS_ZERO', () => ok( ! to_boolean( IS_ZERO( HUNDRED ) ) ) )

	it( 'INCREMENT ZERO to ONE', () => {
		equal(
			to_integer( INCREMENT( ZERO ) ),
			to_integer( ONE )
		)
	} )

	it( 'DECREMENT ONE to ZERO', () => {
		equal(
			to_integer( DECREMENT( ONE ) ),
			to_integer( ZERO )
		)
	} )

	it( 'ADD THREE to TWO to get FIVE', () => {
		equal(
			to_integer( ADD( TWO )( THREE ) ),
			to_integer( FIVE )
		)
	} )

	it( 'SUBTRACT THREE from FIVE to get TWO', () => {
		equal(
			to_integer( SUBTRACT( FIVE )( THREE ) ),
			to_integer( TWO )
		)
	} )

	it( 'MULTIPLY THREE and FIVE to get FIFTEEN', () => {
		equal(
			to_integer( MULTIPLY( FIVE )( THREE ) ),
			to_integer( FIFTEEN )
		)
	} )

	it( 'THREE power of TWO should equal NINE', () => {
		equal(
			to_integer( POWER( THREE )( TWO ) ),
			to_integer( NINE )
		)
	} )
} )
