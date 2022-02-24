import { blamo } from 'it-doesnt-exist';
import { wamo } from 'it-doesnt-exist';

// uncomment this and it works
// const factory = () => {};

export const blub = factory(
	() => {
		// or leave the definition of factory commented out and comment out any of these lines and it works
		if (blamo()) return;
		foo(updatedState);

		wamo();
		bat();

		if (true) {
			const bam = baz();
		}
	}
);