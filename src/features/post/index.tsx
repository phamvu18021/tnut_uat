import { formatDate } from "@/ultil/date";
import { clean } from "@/lib/sanitizeHtml";
import Link from "next/link";
import { SamePosts } from "./Sames";
import styles from "@/styles/Post.module.css";
import { Share } from "./Share";
import { PostTocLogic } from "./PostTocLogic";

export const Post = ({ post }: { post: any }) => {
  const catIds = post?.categories || [];
  const catId = catIds[0];

  return (
    <article className={styles["post"]}>
      <div className={styles["post--share"]}>
        <Share url={post?.slug || "#"} />
      </div>
      <main>
        {post && (
          <>
            <div className={styles["post__main"]}>
              <PostTocLogic post={post} />
              <div className={styles["post__heading"]}>
                <h1
                  dangerouslySetInnerHTML={{
                    __html: clean(post?.title?.rendered || "")
                  }}
                />
                <span>{formatDate(post?.date)}</span>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: clean(post?.content?.rendered || "")
                }}
              />
            </div>
            <SamePosts catId={catId} id={post?.id} />
          </>
        )}

        {!post && (
          <div className={styles["not-found"]}>
            <p>Bài viết này không tồn tại!</p>
            <Link className={styles["back-new"]} href={"/tin-tuc"}>
              Trở về trang tin tức
            </Link>
          </div>
        )}
      </main>
    </article>
  );
};
