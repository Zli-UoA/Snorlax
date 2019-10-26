import UrlItem from '../components/UrlItem.vue';
import ImageItem from '../components/ImageItem.vue';
import FileItem from '../components/FileItem.vue';
import VideoItem from '../components/MovieItem.vue';
import AudioItem from '../components/AudioItem.vue';
import UrlContent from '../components/UrlContent.vue';
import ImageContent from '../components/ImageContent.vue';
import VideoContent from '../components/MovieContent.vue';
import AudioContent from '../components/AudioContent.vue';

const components = {
  url: UrlItem,
  image: ImageItem,
  file: FileItem,
  video: VideoItem,
  audio: AudioItem,
};

const contents = {
  url: UrlContent,
  image: ImageContent,
  video: VideoContent,
  audio: AudioContent,
};

const toContent = data => (contents[data.type] ? h => h(contents[data.type], { ...data }) : null);

const toComponent = (data, callback) => {
  const attr = {
    ...data,
    on: {
      click: () => callback(toContent(data)),
    },
  };
  return h => h(components[data.type] || 'div', attr);
};

export default { toComponent };