export default ( out ) => {
	let i = 0;
	while ( i < 100 ) {
		i ++;
		if ( i % 15 === 0 ) {
			out( 'FizzBuzz' )
		} else if ( i % 3 === 0 ) {
			out( 'Fizz' )
		} else if ( i % 5 === 0 ) {
			out( 'Buzz' )
		} else {
			out( i )
		}
	}
}
