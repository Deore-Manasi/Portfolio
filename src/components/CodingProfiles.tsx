import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, ExternalLink, Copy, Check, Play, Binary, Cpu } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { profileData } from '../data/profile';

const codeSnippets = {
  java: `// Two-Pointer Solution: Optimized Target Search
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length - 1;

        while (left < right) {
            int currentSum = numbers[left] + numbers[right];
            if (currentSum == target) {
                return new int[] { left + 1, right + 1 };
            } else if (currentSum < target) {
                left++; // Increase sum
            } else {
                right--; // Decrease sum
            }
        }
        return new int[] { -1, -1 };
    }
}`,
  cpp: `// Binary Tree Level Order Traversal (BFS)
#include <vector>
#include <queue>
using namespace std;

vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;

    queue<TreeNode*> q;
    q.push(root);

    while (!q.empty()) {
        int levelSize = q.size();
        vector<int> currentLevel;
        for (int i = 0; i < levelSize; ++i) {
            TreeNode* node = q.front();
            q.pop();
            currentLevel.push_back(node->val);
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        result.push_back(currentLevel);
    }
    return result;
}`,
};

export const CodingProfiles: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<'java' | 'cpp'>('java');
  const [copied, setCopied] = useState(false);
  const [runSuccess, setRunSuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setRunSuccess(true);
    setTimeout(() => setRunSuccess(false), 2500);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#060B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Algorithmic Foundations"
          title="Problem Solver"
          highlight="at Heart"
          subtitle="Strengthening analytical and algorithmic foundations through continuous practice in Java and C++."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto mt-8">
          
          {/* Left Column: Stats & LeetCode Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0F1A30]/80 border border-sky-500/25 shadow-card-glow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">100+ Solved</h3>
                  <p className="text-xs font-mono text-sky-300">LeetCode Challenges</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
                Actively solving data structures and algorithmic challenges with a focus on optimal time & space complexity in Java and C++.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0B1324] border border-sky-500/15 text-xs font-mono">
                  <span className="text-[#94A3B8]">Primary Focus:</span>
                  <span className="text-sky-300 font-semibold">Java OOP & DSA</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0B1324] border border-sky-500/15 text-xs font-mono">
                  <span className="text-[#94A3B8]">Secondary Stack:</span>
                  <span className="text-cyan-300 font-semibold">C++ Procedural / DSA</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0B1324] border border-sky-500/15 text-xs font-mono">
                  <span className="text-[#94A3B8]">Core Topics:</span>
                  <span className="text-emerald-300 font-semibold">Trees, HashMaps, Pointers</span>
                </div>
              </div>

              <a
                href={profileData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 shadow-glow-sm transition-all border border-sky-400/30"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Code Editor Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl bg-[#0B1324] border border-sky-500/25 overflow-hidden shadow-2xl font-mono text-xs"
          >
            {/* Editor Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0F1A30] border-b border-sky-500/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                
                {/* Language Switchers */}
                <div className="flex items-center gap-1 ml-4 bg-[#060B14] p-0.5 rounded-lg border border-sky-500/20">
                  <button
                    onClick={() => setSelectedLang('java')}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      selectedLang === 'java'
                        ? 'bg-sky-600 text-white font-semibold'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Solution.java
                  </button>
                  <button
                    onClick={() => setSelectedLang('cpp')}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      selectedLang === 'cpp'
                        ? 'bg-sky-600 text-white font-semibold'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Solution.cpp
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRun}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/50 transition-colors"
                  title="Run sample test cases"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Test</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-[#0F1A30] border border-sky-500/20 text-[#94A3B8] hover:text-white transition-colors"
                  aria-label="Copy snippet"
                  title="Copy code"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Run Output Banner */}
            {runSuccess && (
              <div className="px-4 py-2 bg-emerald-950/60 border-b border-emerald-500/30 text-emerald-300 flex items-center justify-between text-xs">
                <span>✓ Status: Accepted | Runtime: 1 ms | Memory: Optimized O(1) space</span>
                <span className="text-emerald-400 font-bold">100% test cases passed</span>
              </div>
            )}

            {/* Code Body */}
            <div className="p-4 sm:p-6 overflow-x-auto text-sky-100/90 leading-relaxed font-mono text-[11px] sm:text-xs">
              <pre className="text-left">
                <code>{codeSnippets[selectedLang]}</code>
              </pre>
            </div>

            {/* Editor Footer */}
            <div className="px-4 py-2.5 bg-[#060B14] border-t border-sky-500/15 flex items-center justify-between text-[11px] text-[#94A3B8]/70">
              <span>Time Complexity: O(N) · Space Complexity: O(1)</span>
              <span>UTF-8 · Space: 4</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
