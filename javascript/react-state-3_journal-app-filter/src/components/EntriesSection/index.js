import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

export default function EntriesSection({
  favoriteEntriesCount,
  allEntriesCount,
  entries,
  onToggleFavorite,
  filter,
  onShowAllEntries,
  onShowFavoriteEntries,
}) {
  console.log("filter", filter);
  return (
    <section className="entries-section">
      <Tabs>
        <Tab
          isActive={`${filter === "all" ? "isActive" : ""}`}
          onClick={onShowAllEntries}
        >
          All Entries{" "}
          <Badge isActive={`${filter === "all" ? "isActive" : ""}`}>
            {allEntriesCount}
          </Badge>
        </Tab>
        <Tab
          isActive={`${filter === "favorites" ? "isActive" : ""}`}
          onClick={onShowFavoriteEntries}
        >
          Favorites{" "}
          <Badge isActive={`${filter === "favorites" ? "isActive" : ""}`}>
            {favoriteEntriesCount}
          </Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              onToggleFavorite={onToggleFavorite}
              id={entry.id}
              isFavorite={entry.isFavorite}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
