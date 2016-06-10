import everything from '../everything'
import correct from './correct'
import { deepEqual } from 'assert'

describe( 'fizz_buzz', () => {
	it( 'should be correct', () => {
		let results = []
		everything( x => results.push( x ) )
		deepEqual( results, correct )
	} )
} )
