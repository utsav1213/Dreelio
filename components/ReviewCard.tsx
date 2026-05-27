interface ReviewCardProps {
  author: string;
  content: string;
  rating?: number;
  avatar?: string;
}

export default function ReviewCard({
  author,
  content,
  rating,
  avatar,
}: ReviewCardProps) {
  return (
    <div className="review-card">
      {avatar && <img src={avatar} alt={author} className="avatar" />}
      <p className="content">{content}</p>
      {rating && <div className="rating">{"⭐".repeat(rating)}</div>}
      <p className="author">{author}</p>
    </div>
  );
}
