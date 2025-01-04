import React from "react";
import { Award } from "lucide-react";
import { Achievement } from "@/types/achievements";
import siteConfig from "@/config/site.config";

interface AchievementTimelineProps {
  achievements: Achievement[];
}

export function AchievementTimeline({
  achievements,
}: AchievementTimelineProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
        <Award className="w-6 h-6" />
        {siteConfig.texts.headlines.achievements}
      </h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal-300 dark:bg-teal-700"></div>

        {achievements.map((achievement) => (
          <div key={achievement.id} className="mb-8 flex">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center z-10">
              <Award className="w-4 h-4 text-white" />
            </div>
            <div className="ml-4 flex-grow">
              <div className="flex items-center mb-1">
                <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                  {achievement.year}
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  {achievement.title}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
