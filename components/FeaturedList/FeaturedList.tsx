import './FeaturedList.css';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import PostSlider from '../PostSlider/PostSlider';

export default function Featured({ featuredPosts, sectionName }) {
  console.log('featuredPosts', featuredPosts);
  // console.log('featuredPosts', featuredPosts);
  // TODO Implement featured section
  return (
    <div className="bg-background text-textBlack featured-section py-8 sm:py-4">
      <span className="ml-14 text-xl">{sectionName}</span>
      <div className="featured-list-container">
        {/* @ts-ignore */}
        {/* {featuredPosts.map((post) => (
          <FeaturedCard key={post.post.id} post={post} />
        ))} */}
        <PostSlider posts={featuredPosts} />
      </div>
    </div>
  );
}
