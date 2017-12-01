//modularized components
//---------------------------------------------------------------------------------------------//

//passing in the component type as props to be able to choose
//your component on the fly
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // JSX type must be a capitalized variable.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}