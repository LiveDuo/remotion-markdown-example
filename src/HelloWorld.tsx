import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import ReactMarkdown from 'react-markdown';

export const Title: React.FC<{}> = () => {
	return (
		<h1 style={{margin: '40px'}}>
			<ReactMarkdown>## Title</ReactMarkdown></h1>
		);
};

export const Subtitle: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div style={{opacity, margin: '20px', marginTop: '160px'}}>
			<ReactMarkdown>## Subtitle</ReactMarkdown>
		</div>
	);
};

export const HelloWorld: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<AbsoluteFill style={{opacity}}>
				<Sequence from={35}>
					<Title/>
				</Sequence>
				<Sequence from={75}>
					<Subtitle />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
