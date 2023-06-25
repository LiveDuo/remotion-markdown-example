import {Composition} from 'remotion'
import {HelloWorld} from './Composition'

export const RemotionRoot: React.FC = () => {
	return (
		<Composition id="Composition" component={HelloWorld} durationInFrames={150} fps={30} width={1920} height={1080}/>
	)
}
